import static org.junit.Assert.*;
import org.junit.*;

public class AirportTest{

  Airport edinburgh;
   Plane airbus;
  // Radar radar1;
  // WeatherStation rainCatcher;
  // Radio com1;
  // PowerUnit power1;
  // Refueler refueler1;
  // Chocks chocks1;



  @Before 
  public void before() {

     edinburgh = new Airport();
      airbus = new Plane();
     // radar1 = new Radar();
     // rainCatcher = new WeatherStation();
     // com1 = new Radio();
     // power1 = new PowerUnit();
     // refueler1 = new Refueler();
     // chocks1 = new Chocks();

  }

  @Test
  public void airportExists(){
    assertNotNull(edinburgh);
  }

  @Test
  public void airportAcceptsPlanes(){
    edinburgh.planeCapacity.add(airbus);
    assertEqual(1,edinburgh.planeCapacity.size());
  }



}