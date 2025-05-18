import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
// const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: "",
            submitted: false,
            error: null
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add your form submission logic
        // For now, we'll just show a success message
        this.setState({ submitted: true });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        const theme = this.props.theme;
        const formStyle = {
            backgroundColor: theme.body,
            boxShadow: `0 0 20px ${theme.text}20`,
            border: `2px solid ${theme.text}20`
        };

        const inputStyle = {
            backgroundColor: theme.body,
            color: theme.text,
            border: `1px solid ${theme.text}50`,
        };

        const buttonStyle = {
            backgroundColor: theme.text,
            color: theme.body,
            border: 'none',
        };

        return ( <
                div className = "contact-main" >
                <
                Header theme = { theme }
                /> <
                div className = "basic-contact" >
                <
                Fade bottom duration = { 1000 }
                distance = "40px" >
                <
                div className = "contact-heading-div" >
                <
                div className = "contact-heading-img-div" >
                <
                img src = { require(`../../assests/images/${ContactData["profile_image_path"]}`) }
                alt = "" /
                >
                <
                /div> <
                div className = "contact-heading-text-div" >
                <
                h1 className = "contact-heading-text"
                style = {
                    { color: theme.text }
                } > { ContactData["title"] } <
                /h1> <
                p className = "contact-header-detail-text subTitle"
                style = {
                    { color: theme.secondaryText }
                } > { ContactData["description"] } <
                /p> <
                SocialMedia theme = { theme }
                /> < /
                div > <
                /div> < /
                Fade >

                <
                Fade bottom duration = { 1000 }
                distance = "40px" >
                <
                div className = "contact-form-div"
                style = { formStyle } >
                <
                h2 className = "form-heading"
                style = {
                    { color: theme.text }
                } >
                İletişim Formu <
                /h2> {
                this.state.submitted ? ( <
                    div className = "success-message"
                    style = {
                        { color: theme.secondaryText, backgroundColor: `${theme.text}10` }
                    } >
                    Mesajınız başarıyla gönderildi!En kısa sürede size dönüş yapacağım. <
                    /div>
                ) : ( <
                    form onSubmit = { this.handleSubmit }
                    className = "contact-form" >
                    <
                    div className = "form-group" >
                    <
                    input type = "text"
                    name = "name"
                    placeholder = "Adınız"
                    value = { this.state.name }
                    onChange = { this.handleChange }
                    required style = { inputStyle }
                    /> < /
                    div > <
                    div className = "form-group" >
                    <
                    input type = "email"
                    name = "email"
                    placeholder = "E-posta Adresiniz"
                    value = { this.state.email }
                    onChange = { this.handleChange }
                    required style = { inputStyle }
                    /> < /
                    div > <
                    div className = "form-group" >
                    <
                    textarea name = "message"
                    placeholder = "Mesajınız"
                    value = { this.state.message }
                    onChange = { this.handleChange }
                    required style = { inputStyle }
                    /> < /
                    div > <
                    div className = "form-group" >
                    <
                    button type = "submit"
                    className = "submit-btn"
                    style = { buttonStyle } >
                    Gönder <
                    /button> < /
                    div > <
                    /form>
                )
            } <
            /div> < /
        Fade >

            <
            Fade bottom duration = { 1000 }
        distance = "40px" >
            <
            div className = "address-heading-div" >
            <
            div className = "contact-heading-img-div" >
            <
            AddressImg theme = { theme }
        /> < /
        div > <
            div className = "address-heading-text-div" >
            <
            h1 className = "address-heading-text"
        style = {
                { color: theme.text }
            } > { addressSection["title"] } <
            /h1> <
        p className = "contact-header-detail-text subTitle"
        style = {
                { color: theme.secondaryText }
            } > { addressSection["subtitle"] } <
            /p> <
        h1 className = "address-heading-text"
        style = {
                { color: theme.text }
            } > { phoneSection["title"] } <
            /h1> <
        p className = "contact-header-detail-text subTitle"
        style = {
                { color: theme.secondaryText }
            } > { phoneSection["subtitle"] } <
            /p> <
        div className = "address-btn-div" >
            <
            Button text = "Visit on Google Maps"
        newTab = { true }
        href = { addressSection.location_map_link }
        theme = { theme }
        /> < /
        div > <
            /div> < /
        div > <
            /Fade> < /
        div > <
            Footer theme = { this.props.theme }
        onToggle = { this.props.onToggle }
        /> <
        TopButton theme = { this.props.theme }
        /> < /
        div >
    );
}
}

export default Contact;