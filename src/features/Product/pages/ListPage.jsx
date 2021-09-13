import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container,Box, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import productAPI from '../../../api/productAPI';
import ProductListSkeleton from '../components/ProductListSkeleton';
import ProductList from '../components/ProductList';
import { Pagination } from '@material-ui/lab';
const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        paddingBottom: '20px',
    },
}))
function ListPage(props) {
    const  classes = useStyles();
    //set data vào state
    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit:12,
        total:10,
    });
    const [loading, setLoading] = useState(true);
    const [filters,setFilters] = useState({
        _page:1,
        _limit:12,
    });
    useEffect(() => {
        (async () => {
            try {
                const {data,pagination} = await productAPI.getAll(filters);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        })(); 
     },[filters]);
     const handlePageChanges = (e,page) => {
        setFilters((prevFilters)=>({
            ...prevFilters,
            _page:page,
        }));
     };
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>Left column</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>{loading ? <ProductListSkeleton length={12}/> : <ProductList data={productList}/>}
                            <Box className={classes.pagination}>
                                <Pagination color="primary" onChange={handlePageChanges} count={Math.ceil(pagination.total / pagination.limit)} page={pagination._page}></Pagination>
                            </Box>
                        </Paper>

                    </Grid>
                </Grid>
            </Container>
        </Box>
 );
}

export default ListPage;