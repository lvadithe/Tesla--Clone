import React from 'react'
import styled from 'styled-components'

export default function Section() {
    return (
        <Wrap>
            <Itemtext>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>
            </Itemtext>
            <ButtonGroup>
                <LeftButton>
                    Custome Order
                </LeftButton>
                <RightButton>
                    Existing Inventory
                </RightButton>
            </ButtonGroup>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
`

const Itemtext = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`

`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: White;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
`

const RightButton = styled(LeftButton)`

`