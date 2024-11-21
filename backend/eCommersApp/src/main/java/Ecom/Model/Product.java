package Ecom.Model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "Products")
public class Product {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_id")
    private Integer productId;

    @NotNull(message = "Product name is Mandatory ,can Not Be Null")
	@NotBlank(message = "Product name is Mandatory")
    @Column(name = "name")
    private String name;
    
    @NotNull(message = "Product Image is Mandatory ,can Not Be Null")
	@NotBlank(message = "Product Image is Mandatory")
    @Column(name = "imageUrl")
    private String imageUrl;
    
    @Column(name = "isAvailable")
    private boolean isAvailable=true;
    
    @NotNull(message = "Product description is Mandatory ,can Not Be Null")
  	@NotBlank(message = "Product description is Mandatory")
    @Size(min=10,max = 200)
    @Column(name = "description")
    private String description;

    @NotNull(message = "Product price is Mandatory ,can Not Be Null")
    @Column(name = "price")
    private Double price;
 
    @NotNull(message = "Product category_name is Mandatory ,can Not Be Null")
  	@NotBlank(message = "Product category_name is Mandatory")
    @Column(name = "category_name")
    private String category;


    @ElementCollection
    @NotEmpty(message = "At least one image is required.")
    @Column(name = "related_images")
    private List<String> relatedImages;


    @ElementCollection
    @NotEmpty(message = "At least one color is required.")
    @Column(name = "colors")
    private List<String> colors;


    @ElementCollection
    @NotEmpty(message = "At least one size is required.")
    @Column(name = "sizes")
    private List<String> sizes;

    

    @JsonIgnore
    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
    private List<OrderItem> orderItem= new ArrayList<>();;

    @OneToMany(mappedBy = "product",cascade = CascadeType.ALL)
    private List<Review> reviews= new ArrayList<>();;
    
   
}

