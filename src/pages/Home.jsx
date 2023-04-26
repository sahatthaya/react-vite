import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container } from '../styles/layoutStyled'
import ReactLoading from 'react-loading';
import Grid from '@mui/joy/Grid';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import SearchBox from '../components/SearchBox';


function Blog() {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useState(() => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setPosts(res.data)
                setLoading(false);
            });
    }, []);


    return (
        <Container>
            <div style={{ marginTop: '60px' }}>FaKe Store</div>
            <hr />
            <p>A salepage web, also known as a landing page or a sales page, is a single web page designed to persuade visitors to take a specific action, usually to make a purchase or sign up for a service. It is typically used in online marketing campaigns, such as pay-per-click ads or email marketing, and is optimized to convert as many visitors as possible into customers or leads.

                A well-designed salepage web typically includes a headline that grabs the visitor's attention, a compelling offer or value proposition, persuasive copy that highlights the benefits of the product or service, and a clear call to action that encourages the visitor to take the desired action, such as filling out a form or making a purchase.

                In addition, salepage webs often use social proof, such as customer testimonials or trust badges, to build credibility and trust with the visitor. They may also include visual elements, such as images or videos, to further persuade and engage the visitor.</p>


            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ReactLoading type={"bars"} color={"#34a0ff"} height={'20%'} width={'20%'} />
                </div>
            ) :
                (<>
                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        sx={{ flexGrow: 1, mt: 10 }}
                    >
                        {posts?.map((data, idx) => (
                            <Grid xs={2} sm={4} md={4} key={idx}>
                                <Card variant="outlined" sx={{ width: 280, border: '0.5px solid #E0DEE4' }} key={idx}>
                                    <Typography level="h2" fontSize="md" sx={{ mb: 0.5, height: 100 }}>
                                        <h4>{data.title}</h4>
                                    </Typography>
                                    {/* <Typography level="body2">{data.description}</Typography> */}
                                    <Typography level="body2">{data.category}</Typography>
                                    <IconButton
                                        aria-label="bookmark Bahamas Islands"
                                        variant="plain"
                                        color="neutral"
                                        size="sm"
                                        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
                                    >
                                    </IconButton>
                                    <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                                        <img
                                            src={data.image}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <Box sx={{ display: 'flex' }}>
                                        <div>
                                            <Typography level="body3">Total price:</Typography>
                                            <Typography fontSize="lg" fontWeight="lg">
                                                ${data.price}
                                            </Typography>
                                        </div>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>)}
        </Container>
    )
}

export default Blog