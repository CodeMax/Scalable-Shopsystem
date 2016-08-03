package de.hm.shop.article.service.impl.location;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.runners.MockitoJUnitRunner;

import de.hm.shop.article.service.impl.location.DistanceCalculator;

/**
 * 
 * @author Maximilian.Spelsberg
 */
@RunWith(MockitoJUnitRunner.class)
public class DistanceCalculatorTest {

	@Test
	public void testDistanceCalculator() {
		DistanceCalculator dc = new DistanceCalculator();
		
		System.out.println(dc.calcDist(48.311465f, 11.918876f, 48.470167f, 11.935867f));
	}

	@Test
	public void getCoordinatesTest(){
		AddressCoordinatesController acc = new AddressCoordinatesController();
		acc.getCoordinates("Moosburg", "85368");
	}
}
