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
import java.util.concurrent.TimeUnit;
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

  static String getSaltString() {
    String SALTCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    StringBuilder salt = new StringBuilder();
    Random rnd = new Random();
    int strLength = rnd.nextInt(18);
    if(strLength<=2){
      strLength =3;
    }
    while (salt.length() < strLength) { // length of the random string.
      int index = (int) (rnd.nextFloat() * SALTCHARS.length());
      salt.append(SALTCHARS.charAt(index));
    }
    String saltStr = salt.toString();
    return saltStr;
  }

  private static List<String> createRandomFile() {
    List<String> result = new ArrayList<>();
    for (int i = 0; i < 1000; i++) {
      List<String> listString = new ArrayList<>();
      for (int j = 0; j < 50; j++) {

        listString.add(getSaltString());
      }
      StringBuilder sb = new StringBuilder();
      for (String s : listString) {
        sb.append(" ").append(s);
      }
      result.add(sb.toString());
    }
    return result;
  }

  private static void createFile(int i, List<String> values) throws IOException {
    Files.write(Paths.get("tmp/" + i), values);
  }

  private static void createFiles(int fileNum) throws IOException {
    for (int i = 0; i < fileNum; i++) {
      createFile(i, createRandomFile());
//      copyFile(i);
    }
  }
  private static void copyFile(int i) throws IOException {
    Files.copy(Paths.get("tmplate"), Paths.get("tmp/" + i));
  }

  private static Map<String, Integer> frenquncyMap = new ConcurrentHashMap<>();

  public static void main(String[] args) throws IOException, InterruptedException {

//    Files.delete(Paths.get("tmp/"));rm
//    Files.createDirectories(Paths.get("tmp/"));
    long start = System.currentTimeMillis();
    createFiles(10000);
//    readAndPutTo("tmp/1");
//    System.out.println(frenquncyMap);
    System.out.println(System.currentTimeMillis()-start);
    ExecutorService es = Executors.newFixedThreadPool(30);
    System.out.println(Files.list(Paths.get("tmp")).count());
    Files.list(Paths.get("tmp")).forEach(
        path -> {
          count.getAndIncrement();
          try {
            readAndPutTo(path);
          } catch (IOException e) {
            e.printStackTrace();
          }
        }
    );
    System.out.println("completed tasks: "+count);
    long end = System.currentTimeMillis();
    System.out.println(end - start);
    es.shutdown();
    System.out.println(System.currentTimeMillis() - start);
//    System.out.println(es.awaitTermination(120, TimeUnit.SECONDS));

    List result = frenquncyMap.entrySet().stream()
        .sorted(Map.Entry.comparingByValue())
        .limit(100).collect(Collectors.toList());
    System.out.println(result);
    System.out.println(System.currentTimeMillis() - start);

    Files.delete(Paths.get("tmp/*"));
//    Files.createDirectories(Paths.get("tmp/"));
  }

  private static void readAndPutTo(String filePath) throws IOException {

    List<String> lines = Files.readAllLines(Paths.get(filePath));
    for (String line : lines) {
      String[] words = line.split("\\s+");
      for (String word : words) {
        frenquncyMap.put(word, frenquncyMap.getOrDefault(word, 0) + 1);
      }
    }
  }

  private static void readAndPutTo(Path path) throws IOException {

    List<String> lines = Files.readAllLines(path);
    for (String line : lines) {
      line = line.replaceAll(",","");
      String[] words = line.split("\\s+");
      for (String word : words) {
        frenquncyMap.put(word, frenquncyMap.getOrDefault(word, 0) + 1);
      }
    }
  }
}
