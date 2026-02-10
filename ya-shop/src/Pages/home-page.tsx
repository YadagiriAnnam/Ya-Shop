import { useEffect, useState, type FC } from "react";
import { Product } from "../Models/userCreds";
import { Card, Grid, Skeleton, TablePagination } from "@mui/material";

const HomePage:FC = () => {
    const [products , setProducts] = useState<Product[]>([]);
    const [filteredProducts , setFilteredProducts] = useState<Product[]>([]);
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const fetchProducts = async () => {
        try {
              setIsLoading(true);
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
            const data = await response.json();
            setProducts(data);
            if(data.length > 0){
                setFilteredProducts(data.slice(0, 10));
            } else {
                setFilteredProducts([]);
            }
              setIsLoading(false);

           
        } catch (error) {
          setIsLoading(false);
            console.error('Error fetching products:', error);
        }
    }
const [page, setPage] = useState(2);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setIsLoading(true);
    setPage(newPage);
    setFilteredProducts(products.slice(newPage * rowsPerPage, newPage * rowsPerPage + rowsPerPage));
setIsLoading(false);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setIsLoading(true);
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    setFilteredProducts(products.slice(0, parseInt(event.target.value, 10)));
    setIsLoading(false);
  };

    useEffect(() => {
        fetchProducts();
    }, []) ;
   const ProductSkeleton = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 5, sm: 8, md: 12 }}
      sx={{
        width: "100%",
        margin: 0,
        padding: 2,
      }}
    >
      {Array.from(new Array(8)).map((_, index) => (
        <Grid
          key={index}
          size={{ xs: 2, sm: 4, md: 4 }}
          sx={{ width: "100%" }}
        >
          <Card sx={{ p: 1, width: "100%" }}>
            {/* Image */}
            <Skeleton variant="rectangular" height={200} width="100%" />

            {/* Title */}
            <Skeleton height={28} sx={{ mt: 1 }} width="100%" />

            {/* Description */}
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="100%" />

            {/* Price */}
            <Skeleton width="40%" height={28} sx={{ mt: 1 }} />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};


    return (
        <div>
            {isLoading ? (
  <div style={{ minHeight: "100vh" }}>
    <ProductSkeleton />
  </div>
) : 
            <div>
         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 5, sm: 8, md: 12 }}>
  {filteredProducts.map((item:Product, index) => (
    <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
      <Card>
        <img src={item.images[0]} alt={item?.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <h3>{item?.title}</h3>
        <p  style={{
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
  }}>{item?.description}</p>
        <p>Price: ${item?.price}</p>
      </Card>
     
    </Grid>
  ))}
  
</Grid>

<Grid container justifyContent="center"  alignItems="center">
    <TablePagination
      component="div"
      count={products.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Grid>
  </div> 

  }
            </div>
    )
}


export default HomePage;        