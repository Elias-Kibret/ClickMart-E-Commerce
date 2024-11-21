package Ecom.ModelDTO;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ProductDTO {

    @NotNull(message = "Product name is Mandatory ,can Not Be Null")
    @NotBlank(message = "Product name is Mandatory")
    private String name;

    @NotNull(message = "Product Image is Mandatory ,can Not Be Null")
    @NotBlank(message = "Product Image is Mandatory")
    private String imageUrl;

    @NotNull(message = "Product description is Mandatory ,can Not Be Null")
    @NotBlank(message = "Product description is Mandatory")
    @Size(min = 10, max = 200)
    private String description;

    @NotNull(message = "Product price is Mandatory ,can Not Be Null")
    private Double price;

    @NotNull(message = "Product category_name is Mandatory ,can Not Be Null")
    @NotBlank(message = "Product category_name is Mandatory")
    private String category;


    @NotNull(message = "Product related images is Mandatory ,can Not Be Null")
    @NotEmpty(message = "At least one image is required.")
    private List<String> relatedImages;


    @NotNull(message = "Product colors is Mandatory ,can Not Be Null")
    @NotEmpty(message = "At least one color is required.")
    private List<String> colors;


    @NotNull(message = "Product sizes is Mandatory ,can Not Be Null")
    @NotEmpty(message = "At least one size is required.")
    private List<String> sizes;

}
