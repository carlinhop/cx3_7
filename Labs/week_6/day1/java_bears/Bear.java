class Bear{
  private String name;
  private int age;
  private double weight;
  private char gender;

  public Bear(String inputName, int age, double weight, char gender){
    this.name = inputName;
    this.age = age;
    this.weight = weight;
    this.gender = gender;
  }

  public String getName(){
    return this.name;
  }

  public void setName(String name){
    this.name = name;
  }

  public int getAge(){
    return this.age;
  }


  public void setAge(int age){
    this.age = age;
  }

  public double getWeight(){
    return this.weight;
  }


  public void setWeight(double weight){
    this.weight = weight;
  }

  public char getGender(){
    return this.gender;
  }


  public void setGender(char gender){
    this.gender = gender;
  }

  public boolean readyToHybernate(){
    return this.weight >= 80.00;
  }
}