import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <Nav>
            <Link to={'/'}>
                <Logo>
                    <img src="/images/logo.png" alt="" srcSet="" />
                </Logo>
            </Link>
            <Utility>
                <TrackOrderButton>Track Order</TrackOrderButton>
                <Helper src='/images/img1.png' />
                <UserGuide src='/images/img2.png' />
                <User src='/images/user.png' />
            </Utility>
        </Nav>
    )
}

const Nav = styled.nav({
    position: 'fixed',
    display: 'flex',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 36px',
    height: '60px',
    backgroundColor: 'rgb(251,250,254)',
    zIndex: 3,
    
})

const Logo = styled.a({
    padding: 0,
    // width: '80px',
    marginTop: '4px',
    maxHeight: '70px',
    fontSize: 0,
    display: 'inline-block',
    // position: 'relative',
    marginRight: '370px',
    img: {
        display: 'block',
        width: '80%'
    },
    "@media (max-width: 768px)": {
        marginRight: 0
    }
})

const Utility = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const TrackOrderButton = styled.button({
    width: '90px',
    height: '30px',
    padding: 0,
    backgroundColor: 'rgb(121,80,242)',
    fontWeight: '600',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    border: '1px solid rgb(121,80,242)',
    ":hover": {
        backgroundColor: 'rgb(110,70,230)'
    },
    "@media (max-width: 768px)": {
        display: "none"
    }
})

const Helper = styled.img({
    display: 'block',
    position: 'relative',
    width: '12%',
    marginLeft: '10px',
    cursor: 'pointer',
    "@media (max-width: 768px)": {
        marginLeft: 0,
        width: '20%'
    }
})

const UserGuide = styled.img({
    display: 'block',
    position: 'relative',
    width: '12%',
    marginLeft: '10px',
    cursor: 'pointer',
    "@media (max-width: 768px)": {
        marginLeft: 0,
        width: '20%'
    }
})

const User = styled.img({
    display: 'block',
    position: 'relative',
    width: '10%',
    marginLeft: '10px',
    cursor: 'pointer',
    "@media (max-width: 768px)": {
        marginLeft: 0,
        width: '20%'
    }
})

export default Header