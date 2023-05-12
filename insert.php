<!DOCTYPE html> 
<html>
	 <head> 
		<title>Insert Products</title> </head> 
		<body> <h1>Insert Product</h1>
		 <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>"> 
		 <label for="product_name">Product Name:</label>
		  <input type="text" name="product_name" id="product_name"><br/> <br/>
		  <label for="price">Price:</label> 
		  <input type="number" name="price" id="price"><br/> <br/>
		  <label for="category_id">Category ID:</label> 
		  <input type="number" name="category_id" id="category_id"><br/><br/>
		   <input type="submit" name="add" value="Add Product"> 
		  </form> <?php if(isset($_POST['add'])) { $product_name = $_POST['product_name']; $price = $_POST['price']; $category_id = $_POST['category_id'];

	// Create a database connection using PDO
	$dsn = 'mysql:host=localhost;dbname=database';
	$username = 'username';
	$password = 'password';

	try {
		$conn = new PDO($dsn, $username, $password);

		// Construct the SQL query
		$sql = "INSERT INTO products (product_name, price, category_id) VALUES (:product_name, :price, :category_id)";

		// Prepare the statement
		$stmt = $conn->prepare($sql);

		// Bind the parameters
		$stmt->bindParam(':product_name', $product_name);
		$stmt->bindParam(':price', $price);
		$stmt->bindParam(':category_id', $category_id);

		// Execute the statement
		$stmt->execute();

		echo "Product added successfully.";

		// Close the database connection
		$conn = null;
	} catch(PDOException $e) {
		echo "Error: " . $e->getMessage();
	}
}
?>
</body> </html> 