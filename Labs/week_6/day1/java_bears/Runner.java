class Runner{
  public static void main(String[] args){
  Bear bear = new Bear("Balu", 10, 98.62, 'f');

  String name = bear.getName();

  System.out.println(name);

  bear.setName("Ted");
  bear.setAge(20);

  System.out.println(bear.getName());
  System.out.println(bear.getAge());



  }
}