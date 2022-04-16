import React from 'react'
import styled from 'styled-components'
import Section from '../../Secondary/Section/Section'

export default function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                text='Order Online for Touchless Delivery'
                background='model-s.jpg'
                leftBtnText='Custome Order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title="Model Y"
                text="Order Online for Touchless Delivery"
                background="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model 3"
                text="Order Online for Touchless Delivery"
                background="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Model X"
                text="Order Online for Touchless Delivery"
                background="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                text="Money-back guarantee"
                background="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                text="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                background="solar-roof.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description=""
                background="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
`