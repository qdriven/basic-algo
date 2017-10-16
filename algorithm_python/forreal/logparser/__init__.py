# -*- coding:utf-8 -*-
import sys
import gzip
import bz2
from optparse import OptionParser

from collections import defaultdict


class LogProcessor(object):
    """
    setup parser and call_chains setting

    """

    def __init__(self, call_chains=None):
        if call_chains is None:
            call_chains = []
        self._call_chains = call_chains

    def split(self, line):
        """
        split a log file.

        :param line: 
        :return: 
        """
        parts = line.split()
        return {
            'size': 0 if parts[9] == '-' else int(parts[9]),
            "file_requested": parts[6]
        }

    def parse(self, handle):
        """
        parse the log file
        request a dictionary composed of log entry values for easy data summation
        :param handle: 
        :return: 
        """
        for line in handle:
            fields = self.split(line)
            for func in self._call_chains:
                func(fields)


class MaxSizeHandler(object):
    """
    Check a file's size.
    """

    def __init__(self, size):
        self.size = size
        self.name_size = 0
        self.warning_files = set()

    @property
    def title(self):
        return 'Files over %d bytes' % self.size

    def process(self, fields):
        """
        Looks at each line individually.

        Looks at each parsed log line individually and 
        performs a size calculation. If it's bigger than 
        our self.size, we just print a warning.
        """
        if fields['size'] > self.size:
            print >> sys.stderr, \
            'Warning: %s exceeeds %d bytes (%d)!' % \
            (fields['file_requested'], self.size,
             fields['size'])

    def report(self):
        """
        Format the Max Size Report.

        This method formats the report and prints 
        it to the console.
        """
        for f, s in self.warning_files:
            print('%-*s :%d' % (self.name_size, f, s))


def get_stream(path):
    """
    Detect compression.

    If the file name ends in a compression 
    suffix, we'll open it using the correct 
    algorith. If not, we just return a standard
    file object.
    """
    _open = open
    if path.endswith('.gz'):
        _open = gzip.open
    elif path.endswith('.bz2'):
        _open = bz2.open

    return _open(path)


class ErrorCodeHandler(object):
    """
    Collect Error Code Information.
    """
    title = 'Error Code Breakdown'

    def __init__(self):
        self.error_codes = defaultdict(int)
        self.errors = 0
        self.lines = 0

    def process(self, fields):
        """
        Scan each line's data.

        Reading each line in, we'll save out the 
        number of response codes we run into so we 
        can get a picture of our success rate.
        """
        code = fields['status']
        self.error_codes[code] += 1

        # Assume anything > 400 is
        # an HTTP error
        self.lines += 1
        if int(code) >= 400:
            self.errors += 1

    def report(self):
        """
        Print out Status Summary.

        Create the status segment of the
        report.
        """
        longest_num = sorted(self.error_codes.values())[-1]
        longest = len(str(longest_num))

        for k, v in self.error_codes.items():
            print('{0}: {1:>{2}}'.format(k, v, longest))

        # Print summary information
        print('Errors: {0}; Failure Rate: {1:%}; Codes: {2}'.format(
            self.errors, float(self.errors) / self.lines,
            len(self.error_codes.keys())))


if __name__ == '__main__':
    parser = OptionParser()

    parser.add_option('-s', '--size', dest="size",
                      help="Maximum File Size Allowed",
                      default=0, type="int")

    parser.add_option('-f', '--file', dest="file",
                      help="Path to Web Log File", default="-")

    opts, args = parser.parse_args()
    call_chain = []

    if opts.file == '-':
        file_stream = sys.stdin
    else:
        try:
            file_stream = get_stream(opts.file)
        except IOError as e:
            print >> sys.stderr, str(e)
            sys.exit(-1)

    size_check = MaxSizeHandler(opts.size)
    call_chain.append(size_check.process)
    processor = LogProcessor(call_chain)
    processor.parse(file_stream)
