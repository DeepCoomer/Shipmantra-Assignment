import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = () => {
    return (
        <Container>
            <Heading>India Wide Deliveries</Heading>
            <Icons>
                <Link to={"/calculatedistance"}>
                    <Icon>
                        <img src="/images/img3.png" alt="" srcSet="" />
                        <p>Calculate Distance</p>
                    </Icon>
                </Link>
                <Link to={"/shipperdata"}>
                    <Icon>
                        <img src="/images/img4.png" alt="" srcSet="" />
                        <p>Shipper Data</p>
                    </Icon>
                </Link>
            </Icons>
            <ScheduleTab>Schedule for later</ScheduleTab>
        </Container>
    )
}

const Container = styled.div({
    height: '52vh',
    backgroundColor: 'rgb(38,51,99)',
    color: 'white',
    zIndex: -1,
    "@media (max-width: 768px)": {
    //    height: "60vh",
    width: '100%',
    margin: "auto"

    }
})

const Heading = styled.div({
    fontSize: '26px',
    fontWeight: '600',
    padding: '25px 200px',
    marginTop: '62px',
    "@media (max-width: 768px)": {
        fontSize: "16px",
        display: "block",
        paddingTop: 25,
        paddingLeft: 121,
        paddingRight: 121
       
    }
})

const Icons = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '50vh',
    marginLeft: '145px',
    marginBottom: '100px',
    "@media (max-width: 768px)": {
        flexDirection: 'column',
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: 0,
    }
})

const Icon = styled.div({
    border: '2px solid rgb(74,86,130)',
    height: '115px',
    width: '105px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    img: {
        height: '60%',
        width: '60%'
    },
    p: {
        fontSize: '12px'
    },
    ":hover": {
        cursor: 'pointer'
    },
    "@media (max-width: 768px)": {
        marginTop: 5
    }
})

const ScheduleTab = styled.div({
    backgroundColor: 'rgb(15,27,71)',
    height: '25px',
    width: '117px',
    color: 'white',
    fontSize: '10px',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    position: 'relative',
    bottom: '90px',
    marginLeft: '193px',
    "@media (max-width: 768px)": {
       margin: "auto",
    }
})

export default Home