package tests;
import static org.junit.Assert.*;
import org.junit.*;
import cardGame.*;

public class CardTest{

Card card1;

@Before
public void before(){

card1 = new Card(1);

}

@Test
public void testCardHasValue(){
  assertEquals(1, card1.value);

}

}
