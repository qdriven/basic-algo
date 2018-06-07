package io.hedwig.notes.algorithm.topk;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

/**
 * @@author: patrick
 */
public class TopKInterview1 {

  private static List<String> listStrings = new ArrayList<>();
  private static AtomicInteger count = new AtomicInteger(0);
  static {
    listStrings.add("a");
    listStrings.add("b");
    listStrings.add("c");
    listStrings.add("d");
    listStrings.add("e");
    listStrings.add("f");
    listStrings.add("g");
  }

  private static void createFile(int i,List<String> values) throws IOException {
    Files.write(Paths.get("tmp/"+i),values);
  }

  private static List<String> getRandom3(){
    List<String> result = new ArrayList<>();
    for (int i = 0; i <2; i++) {
      result.add(listStrings.get(new Random().nextInt(7)));
    }
    return result;
  }

  private static void copyFile(int i) throws IOException {
    Files.copy(Paths.get("tmplate"),Paths.get("tmp/"+i));
  }
  private static Map<String,Integer> frenquncyMap = new ConcurrentHashMap<>();

  public static void main(String[] args) throws IOException, InterruptedException {
    for (int i = 0; i < 10000; i++) {
//      createFile(i,getRandom3());
      copyFile(i);
    }
//    readAndPutTo("tmp/1");
//    System.out.println(frenquncyMap);

    ExecutorService es = Executors.newFixedThreadPool(30);
    Files.list(Paths.get("tmp")).forEach(
        path -> {
          count.getAndIncrement();
          try {
//            Thread.sleep(100)100;
            readAndPutTo(path);
          } catch (IOException e) {
            e.printStackTrace();
          }
        }
    );
    es.shutdown();
    System.out.println(frenquncyMap);
    System.out.println(count);

    List result =frenquncyMap.entrySet().stream()
        .sorted(Map.Entry.comparingByValue())
        .limit(3).collect(Collectors.toList());
    System.out.println(result);
  }

  private static void readAndPutTo(String filePath) throws IOException {

    List<String> lines = Files.readAllLines(Paths.get(filePath));
    for (String line : lines) {
      String[] words = line.split("\\s+");
      for (String word : words) {
        frenquncyMap.put(word,frenquncyMap.getOrDefault(word,0)+1);
      }
    }
  }

  private static void readAndPutTo(Path path) throws IOException {

    List<String> lines = Files.readAllLines(path);
    for (String line : lines) {
      String[] words = line.split("\\s+");
      for (String word : words) {
        frenquncyMap.put(word,frenquncyMap.getOrDefault(word,0)+1);
      }
    }
  }
}
