package io.allroundtesters.adt.tree;


public class TreeEntry<K extends Comparable<K>, V> {

  private final K key;
  private final V value;

  /**
   *
   */
  public TreeEntry(K key, V value) {
    super();
    if (key == null) {
      throw new IllegalArgumentException("key should not be null");
    }
    this.key = key;
    this.value = value;
  }

  public K getKey() {
    return key;
  }

  public V getValue() {
    return value;
  }

  @Override
  public String toString() {
    return "TreeEntry [key=" + key + ", value=" + value + "]";
  }

  /**
   *
   */
  @Override
  public int hashCode() {
    return key.hashCode() << 16 + value.hashCode();
  }

  /**
   *
   */
  @Override
  public boolean equals(Object obj) {
    if (obj instanceof TreeEntry) {
      @SuppressWarnings("unchecked")
      TreeEntry<K, V> entry = (TreeEntry<K, V>) obj;
      if (this.key == null) {
        if (entry.getKey() != null) {
          return false;
        }
      } else if (!this.key.equals(entry.getKey())) {
        return false;
      }
      if (this.value == null) {
        if (entry.getValue() != null) {
          return false;
        }
      } else if (!this.value.equals(entry.getValue())) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }
}
