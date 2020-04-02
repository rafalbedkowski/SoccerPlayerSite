import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledForm = styled.form`
  display: grid;
  grid-template-rows: 20% 20% 40% 20%;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 5%;
  right: 5%;
  font-size: 12px;
  font-weight: 100;
  padding: 0;

  @media (min-width: 800px) {
    margin-top: 60px;
    left: 20%;
    right: 20%;
  }
`

const StyledLabel = styled.label`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;

  @media (min-width: 800px) {
    font-size: 14px;
  }
`

const StyledInput = styled.input`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  line-height: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 0 5px 0 5px;
  background-color: rgba(78, 78, 77, 0.3);
  border: none;
  border-bottom: 1px solid #707070;
  border-radius: 5px;
  outline: none;
  color: #fbba07;

  @media (min-width: 800px) {
    border: none;
    font-size: 16px;
    line-height: 30px;
    background-color: rgba(78, 78, 77, 0.7);
  }
`

const StyledArea = styled.textarea`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  margin-bottom: 50px;
  margin-top: 10px;
  height: 150px;
  padding: 0 5px 0 5px;
  background-color: rgba(78, 78, 77, 0.6);
  border: none;
  border-bottom: 1px solid #707070;
  border-radius: 5px;
  outline: none;
  color: #fbba07;

  @media (min-width: 800px) {
    font-size: 16px;
    border: none;
  }
`

const StyledButton = styled.button`
  justify-self: center;
  align-self: center;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 500;
  line-height: 40px;
  width: 50%;
  background-color: transparent;
  color: #fbba07;
  border: 2px solid #fbba07;
  border-radius: 10px;
  outline: none;
  cursor: pointer;

  :disabled {
    color: gray;
    border-color: gray;
  }
`

const StyledSuccess = styled.p`
  color: white;
  text-align: center;
  position: absolute;
  background-color: yellowgreen;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const StyledError = styled.p`
  color: white;
  text-align: center;
  position: absolute;
  background-color: red;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

class ContactPage extends React.Component {
  state = {
    from: "",
    subject: "",
    content: "",
    error: "",
    success: "",
    isValid: false,
  }

  URL_SEND_EMAIL = "http://localhost:5000/EmailApi/SendEmailAsync"

  POST_HEADER_JSON = data => ({
    method: "POST",
    headers: {},
    body: data,
  })

  validateForm = () => {
    const { from, subject, content } = this.state
    if ((from.length > 0) & (subject.length > 0) & (content.length > 0))
      return true
    else return false
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
      isValid: this.validateForm(),
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { from, subject, content } = this.state
    const form = new FormData()
    form.append("from", from)
    form.append("subject", subject)
    form.append("content", content)

    try {
      const response = await fetch(
        this.URL_SEND_EMAIL,
        this.POST_HEADER_JSON(form)
      )
      if (response.ok) {
        this.setState({
          success: "Dziekuję za wysłanie wiadomości.",
          error: "",
        })
        setTimeout(() => {
          this.setState({
            success: "",
            from: "",
            subject: "",
            content: "",
          })
        }, 3000)
      } else {
        this.setState({
          error: "Wiadomość nie została wysłana !!!",
        })
        setTimeout(() => {
          this.setState({ error: "" })
        }, 3000)
      }
    } catch (e) {
      this.setState(prevState => ({
        error: prevState.error + e,
      }))
    }
  }

  render() {
    const { error, success, isValid } = this.state
    return (
      <Layout>
        <SEO title="Kontakt" description={`Formularz kontaktowy`} />
        <StyledForm onSubmit={this.handleSubmit.bind(this)}>
          <StyledLabel htmlFor="email">
            Email :
            <StyledInput
              type="email"
              id="email"
              name="from"
              value={this.state.from}
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="title">
            Temat :
            <StyledInput
              type="text"
              id="title"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
            />
          </StyledLabel>
          <StyledLabel htmlFor="message">
            Wiadomość :
            <StyledArea
              name="content"
              form="usrform"
              value={this.state.content}
              onChange={this.handleInputChange}
            ></StyledArea>
          </StyledLabel>
          <StyledButton
            type="submit"
            value="Submit"
            disabled={isValid ? false : true}
          >
            WYŚLIJ
          </StyledButton>
        </StyledForm>
        {error ? <StyledError>{error}</StyledError> : null}
        {success ? <StyledSuccess>{success}</StyledSuccess> : null}
      </Layout>
    )
  }
}

export default ContactPage
