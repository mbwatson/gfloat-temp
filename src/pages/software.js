import * as React from "react"
import { Link as GatsbyLink } from 'gatsby'
import Seo from '../components/layout/seo'
import featureImg from '../images/features-1.png'
import BreadcrumbNav from '../components/layout/breadcrumbs'
import { useTheme } from '@mui/material/styles'
import { Box, Link as MuiLink, Container, Typography } from "@mui/material"

const software = [
    {
        name: 'Github',
        title: 'Github Repo' ,
        subheading: 'Visit our Github repository to access the latest version of the software release.',
        text: 'Click below to access the Github page. It has annotation project, ontology and neuro-bridge projects.',
        resourceLink: 'https://github.com/NeuroBridge',
        photo: featureImg,
    },
]

const SoftwarePage = () => {
    /* eslint-disable no-unused-vars */
    const theme = useTheme()
    const styles = {
        contentContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            paddingTop: '30px',
        },
        resourceContainer: {
            display: 'flex',
            paddingBottom: '30px',
        },
        resourceName: {
            width: '25%',
            display: 'flex',
            justifyContent: 'space-between',
            marginRight: '40px',
            '& a': {
                textDecoration: 'none',
                color: theme.palette.text.secondary,
                fontWeight: '600',
                fontSize: '1.2rem',
            },
            '&:after': {
                content: '""',
                background: 'red',
                height: '35px',
                width: '3px',
            }
        },
        resourceContent: {
            display: 'flex',
        },
        resourceDescription: {
            '& h2': {
                paddingBottom: '15px',
            },
            '& h3': {
                paddingBottom: '10px',
                fontStyle: 'italic',
                color: 'grey',
            },
            '& a': {
                textDecoration: 'none',
                color: theme.palette.text.secondary,
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.7px',
            }
        },
        image: {
            padding: '20px',
            height: '250px',
        },
    }

    const breadcrumbs = [
        { text: 'Home', path: '/' },
        { text: 'Resources', path: '/software' },
    ]

    return (
        <>
            <Seo title="NeuroBridge Resources" />
            <BreadcrumbNav crumbs={breadcrumbs} title='Resources'/>
            <Container >
                <Typography variant='h1'>Our Latest Updated Software</Typography>
                <Box sx={styles.contentContainer}>
                    {software.map((item) => (
                        <Box key={item.name} sx={styles.resourceContainer}>
                            <Box sx={styles.resourceName}>
                                <MuiLink component={GatsbyLink} to={item.resourceLink} sx={styles.resourceLinkLeft}>Github</MuiLink>
                            </Box>
                            <Box sx={styles.resourceContent}>
                                <Box sx={styles.resourceDescription}>
                                    <Typography variant='h2'>{item.title}</Typography>
                                    <Typography variant='h3'>{item.subheading}</Typography>
                                    <Typography paragraph>{item.text}</Typography>
                                    <MuiLink component={GatsbyLink} to={item.resourceLink}>Github</MuiLink>
                                </Box>
                                <Box
                                    component='img'
                                    key={item.name}
                                    src={item.photo}
                                    alt={item.name}
                                    sx={styles.image}
                                />
                            </Box>

                        </Box>

                    ))}
                </Box>
            </Container>
        </>
    )
}

export default SoftwarePage
