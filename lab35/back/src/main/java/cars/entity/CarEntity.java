package cars.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "car")
public class CarEntity {

  @Id
  @GeneratedValue
  private Long id;

  @Column
  private String producer;

  @Column
  private double price;

  @Column
  private int horsepower;

  @Column(length = 2000)
  private String image_uri;

}
