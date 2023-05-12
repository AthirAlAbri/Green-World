<!DOCTYPE html> <html> <head> <title>Delete Products</title>
 </head> <body> <h1>Delete Product</h1> <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
  <label for="product_id">Product ID:</label> <input type="number" name="product_id" id="product_id"><br/> <br/>
  <input type="submit" name="delete" value="Delete Product"> 
  </form> <?php if(isset($_POST['delete'])) { $product_id = $_POST['product_id'];

	// Create a database connection using mysqli
	$servername = "localhost";
	$username = "username";
	$password = "password";
	$dbname = "database";

	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}

	// Construct the SQL query
	$sql = "DELETE FROM products WHERE product_id = $product_id";

	// Execute the query
	if ($conn->query($sql) === TRUE) {
		echo "Product deleted successfully.";
	} else {
		echo "Error deleting product: " . $conn->error;
	}

	// Close the database connection
	$conn->close();
}
?>
</body> </html>