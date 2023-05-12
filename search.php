<!DOCTYPE html>
<html>
<head>
	<title>Search Products</title>
</head>
<body>
	<h1>Search Products</h1>
	<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
		<label for="product_type">Product Type:</label>
		<input type="text" name="product_type" id="product_type"><br/><br/>
		<label for="price">Price:</label>
		<input type="number" name="price" id="price"><br/><br/>
		<input type="submit" name="search" value="Search">
	</form>
	<?php
	if(isset($_POST['search'])) {
		$product_type = $_POST['product_type'];
		$price = $_POST['price'];

		// Create a database connection using mysqli
		$servername = "localhost";
		$username = "username";
		$password = "password";
		$dbname = "greenworld";

		$conn = new mysqli($servername, $username, $password, $dbname);

		// Check connection
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}

		// Construct the SQL query
		$sql = "SELECT * FROM products WHERE product_name LIKE '%$product_type%' AND price <= $price";

		// Execute the query and display the results
		$result = $conn->query($sql);

		if ($result->num_rows > 0) {
			echo "<table>";
			echo "<tr><th>Product Name</th><th>Price</th><th>Category</th></tr>";
			while($row = $result->fetch_assoc()) {
				echo "<tr><td>".$row["product_name"]."</td><td>".$row["price"]."</td><td>".$row["category_id"]."</td></tr>";
			}
			echo "</table>";
		} else {
			echo "No results found.";
		}

		// Close the database connection
		$conn->close();
	}
	?>
</body>
</html>