package com.dsa;
// LinkedList: Add O(1) head, Search O(n), Delete O(n) - better than array for frequent inserts/deletes
public class TaskLinkedList {
    private Task head;
    public void add(Task t)    { 
        if (t == null) {
            System.out.println("Cannot add null task");
            return;
        }
        t.next = head; head = t; 
    }
    public void traverse()     { 
        if (head == null) {
            System.out.println("Task list is empty");
            return;
        }
        Task cur=head; while(cur!=null){System.out.println(cur);cur=cur.next;} 
    }
    public Task search(int id) { Task cur=head; while(cur!=null){if(cur.getTaskId()==id)return cur;cur=cur.next;} return null; }
    public void delete(int id) {
        if (head==null) return;
        if (head.getTaskId()==id){head=head.next;return;}
        Task cur=head;
        while(cur.next!=null){if(cur.next.getTaskId()==id){cur.next=cur.next.next;return;}cur=cur.next;}
    }
    public static void main(String[] args) {
        TaskLinkedList list = new TaskLinkedList();
        list.add(new Task(1,"Design DB","Done"));
        list.add(new Task(2,"Write API","In Progress"));
        list.add(new Task(3,"Write Tests","Pending"));
        list.traverse();
        System.out.println("\nSearch id=2: " + list.search(2));
        list.delete(2);
        System.out.println("\nAfter delete:"); list.traverse();
    }
}
