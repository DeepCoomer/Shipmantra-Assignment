import React, { useState } from 'react'
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { calculateDistance } from '../Services/api'

const CalculateDistance = () => {
    const [loading, setloading] = useState(false);
    const [startcity, setStartCity] = useState("Bangalore");
    const [endcity, setEndCity] = useState("Bangalore");
    const [response, setResponse] = useState({});
    const [op, setop] = useState(false)

    const closeModal = () => setop(false);

    const handleSubmit = async () => {
        setloading(true)
        if (startcity === endcity) {
            alert("Both the cities can't be the same!!");
            setloading(false);
            return;
        }
        let data = await calculateDistance(startcity, endcity);
        setResponse(data);
        setloading(false)
        setop(true)
    }
    return (
        <Container>
            <Heading>Calculate Distance</Heading>
            <Icons>
                <Icon>
                    <img src="/images/img3.png" alt="" srcSet="" />
                    <p>Calculate Distance</p>
                </Icon>
            </Icons>
            <FormContainer>
                <Wrapper>
                    <FormHeader>Calculate Distance</FormHeader>
                    <StyledForm>
                        <StyledLabel>Start City</StyledLabel>
                        <StyledSelect value={startcity} onChange={(e) => setStartCity(e.target.value)}>
                            <StyledOption value="Bangalore">Bangalore</StyledOption>
                            <StyledOption value="Chennai">Chennai</StyledOption>
                            <StyledOption value="Kolkata">Kolkata</StyledOption>
                            <StyledOption value="Mumbai">Mumbai</StyledOption>
                        </StyledSelect>
                        <StyledLabel>End City</StyledLabel>
                        <StyledSelect value={endcity} onChange={(e) => setEndCity(e.target.value)}>
                            <StyledOption value="Bangalore">Bangalore</StyledOption>
                            <StyledOption value="Chennai">Chennai</StyledOption>
                            <StyledOption value="Kolkata">Kolkata</StyledOption>
                            <StyledOption value="Mumbai">Mumbai</StyledOption>
                        </StyledSelect>
                    </StyledForm>
                    <br /><br />
                    <SubmitButton type='submit' onClick={handleSubmit}>
                        {
                            loading ? <ClipLoader
                                color="white"
                                loading={loading}
                                // cssOverride={override}
                                size={15}
                            // aria-label="Loading Spinner"
                            // data-testid="loader"
                            /> : "Get Distance"
                        }
                    </SubmitButton>
                </Wrapper>
            </FormContainer>
            <StyledPopup
                closeOnDocumentClick onClose={closeModal}
                open={op}
                position="right center">
                <PopupContainer>
                    <Close onClick={closeModal}>
                        &times;
                    </Close>
                    <DistanceDetails>
                        <h3>Distance Details</h3>
                        <p>Start City: <span>{response.startcity}</span></p>
                        <p>End City: <span>{response.endcity}</span></p>
                        <p>Total Distance: <span>{response.totaldistance}</span></p>
                        <p>Cost in Paise: <span>{response.costinpaise}</span></p>
                        <CLoseButton onClick={closeModal}>Close</CLoseButton>
                    </DistanceDetails>
                </PopupContainer>
            </StyledPopup>
        </Container>

    )
}

const Container = styled.div({
    height: '52vh',
    backgroundColor: 'rgb(38,51,99)',
    color: 'white',
    zIndex: -1
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
        paddingLeft: 25,
        paddingRight: 25

    }
})

const Icons = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50vh',
    marginLeft: '75px',
    marginBottom: '100px',
    "@media (max-width: 768px)": {
        width: "20vh",
        marginLeft: 0
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
    }
})

const FormContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    zIndex: 1
})

const Wrapper = styled.div({
    display: 'inline-block',
    position: 'relative',
    height: '50vh',
    width: '357px',
    backgroundColor: 'rgb(251,250,254)',
    zIndex: 1,
    borderRadius: '10px',
    bottom: '20vh',
    "@media (max-width: 768px)": {
        top: "0px",
    }
})

const FormHeader = styled.p({
    fontSize: '20px',
    fontWeight: '600',
    color: 'black',
    marginLeft: '20px'
})

const StyledForm = styled.div({
    padding: '18px',
})

const StyledLabel = styled.label({
    display: 'flex',
    color: 'rgb(153,153,153)',
    textTransform: 'uppercase',
    fontWeight: '600',
    marginTop: '10px'
})

const StyledSelect = styled.select({
    width: '100%',
    minWidth: '15ch',
    maxWidth: '30ch',
    borderRadius: '0.25em',
    padding: '0.25em 0.5em',
    fontSize: '1.25rem',
    cursor: 'pointer',
    lineHeight: 1.1,
    backgroundColor: '#f0f2f5',
    backgroundImage: 'linear-gradient(to top, #f9f9f9, #fff 33%)',
    marginTop: '10px'
})

const StyledOption = styled.option({
    backgroundColor: '#f0f2f5',
})

const SubmitButton = styled.button({
    width: '100px',
    height: '40px',
    padding: 0,
    backgroundColor: 'rgb(121,80,242)',
    fontWeight: '600',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    border: '1px solid rgb(121,80,242)',
    display: 'block',
    margin: 'auto',
    ":hover": {
        backgroundColor: 'rgb(110,70,230)'
    },
})

const StyledPopup = styled(Popup)({
    "&-content": {
        // height: '25vh',
        width: '25vw',
        // color: 'black',
        // backgroundColor: 'rgb(251,250,254)',
        // borderCollapse: 'separate',
        borderRadius: '10px',
        // zIndex: 2
    }
})

const PopupContainer = styled.div({
    height: '42vh',
    width: '20vw',
    color: 'black',
    backgroundColor: 'rgb(251,250,254)',
    borderCollapse: 'separate',
    borderRadius: '10px',
})

const Close = styled.button({
    color: 'black',
    background: 'none',
    border: 'none',
    height: '25px',
    width: '25px',
    cursor: 'pointer',
    display: 'inline-block',
    position: 'relative',
    left: '23vw'
})

const DistanceDetails = styled.div({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'centre',
    alignItems: 'inherit',
    margin: 'auto'
})

const CLoseButton = styled.button({
    width: '100px',
    height: '40px',
    padding: 0,
    backgroundColor: 'rgb(121,80,242)',
    fontWeight: '600',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    border: '1px solid rgb(121,80,242)',
    display: 'inline-block',

    ":hover": {
        backgroundColor: 'rgb(110,70,230)'
    },
})


export default CalculateDistance