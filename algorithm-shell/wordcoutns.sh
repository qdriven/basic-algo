
awk '\
{ for (i=1;i<=NF;i++) { ++D[$i];} }\
END { for (i in D) { print i, D[i] } } \
' words.txt | sort -nr -k 2

## 
## sort -n means "compare according to string numerical value".
## sort -r means "reverse the result of comparisons".
## sort -k 2 means "sort by the second word"


## cat words.txt | tr -s ' ' '\n' | sort | uniq -c | sort -r | awk '{ print $2, $1 }'
## cat words.txt | tr -s '[[:space:]]' '\n'| sort | uniq -c | sort -r | sed -r -e 's/[[:space:]]*([[:digit:]]+)[[:space:]]*([[:alpha:]]+)/\2 \1/g'