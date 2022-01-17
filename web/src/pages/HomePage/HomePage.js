import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import {
  CheckboxField,
  Form,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  Label,
} from '@redwoodjs/forms'

const OrderForm = () => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Form onSubmit={onSubmit}>
      <div className='flex'>
        <Label name="num-chairs" errorClassName="error">
          Number of Chairs
        </Label>
        <TextField
          name="num-chairs"
          errorClassName="error"
        />
        <FieldError name="num-chairs" className="error" />
        <Label name="price-chairs" errorClassName="error">
          Price for Chairs
        </Label>
        <TextField
          name="price-chairs"
          errorClassName="error"
        />
        <FieldError name="price-chairs" className="error" />
      </div>

      <div className='flex'>
        <Label name="num-tables" errorClassName="error">
          Number of Tables
        </Label>
        <TextField
          name="num-tables"
          errorClassName="error"
        />
        <FieldError name="num-tables" className="error" />
        <Label name="price-tables" errorClassName="error">
          Price for Tables
        </Label>
        <TextField
          name="price-tables"
          errorClassName="error"
        />
        <FieldError name="price-tables" className="error" />
      </div>

      <div className='flex'>
        <Label name="canopies" errorClassName="error">
          Select one or more of the available canopies:
        </Label>
        <TextField
          name="canopies"
          errorClassName="error"
        />
        <FieldError name="canopies" className="error" />
        <Label name="price-canopies" errorClassName="error">
          Price for Canopies
        </Label>
        <TextField
          name="price-canopies"
          errorClassName="error"
        />
        <FieldError name="price-canopies" className="error" />
      </div>

      <div className='flex'>
        <Label name="jumpers" errorClassName="error">
          Select one or more of the available jumpers:
        </Label>
        <TextField
          name="jumpers"
          errorClassName="error"
        />
        <FieldError name="jumpers" className="error" />
        <Label name="price-jumpers" errorClassName="error">
          Price for Jumpers
        </Label>
        <TextField
          name="price-jumpers"
          errorClassName="error"
        />
        <FieldError name="price-jumpers" className="error" />
      </div>

      <div>
        <Label name="delivery-or-pickup" errorClassName="error">
          Will this order be delivered?
        </Label>
        <CheckboxField
          name="delivery-or-pickup"
          errorClassName="error"
        />
        <FieldError name="delivery-or-pickup" className="error" />
      </div>

      <div className='flex'>
        <Label name="delivery-date-time" errorClassName="error">
          Delivery Date+Time
        </Label>
        <TextField
          name="delivery-date-time"
          errorClassName="error"
        />
        <FieldError name="delivery-date-time" className="error" />
        <Label name="pickup-date-time" errorClassName="error">
          Pickup Date+Time
        </Label>
        <TextField
          name="pickup-date-time"
          errorClassName="error"
        />
        <FieldError name="pickup-date-time" className="error" />
      </div>

      <Label name="message" errorClassName="error">
        Notes
      </Label>
      <TextAreaField
        name="message"
        errorClassName="error"
      />
      <FieldError name="message" className="error" />

      <Submit>Submit Order</Submit>
    </Form>
  )
}

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Events++</h1>

      Find or create client by phone number:
      <div>
        <input type="tel" id="phone" name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
      </div>

      Date of event:
      <div>
        <input type="date" id="date" name="date"/>
      </div>

      Address:
      <div>
        <input type="text" id="address" name="address"/>
      </div>

      <div className='current-inventory'>
        <p>Current Inventory for selected date:</p>
          Chairs: 99
          Table: 7
          Canopies:
            - 10 x 20
            - 20 x 20
          Jumpers:
            - 13 x 13
            - 10 x 10
        <hr />
      </div>

      Create Order:
      <OrderForm />
    </>
  )
}

export default HomePage
