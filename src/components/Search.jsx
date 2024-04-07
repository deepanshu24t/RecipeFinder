import React, { useState } from 'react'
import { Grid, Form,Input } from 'semantic-ui-react'

function Search({setSearchedQuery}) {
  const [value,setValue] = useState("");

  const onFormSubmit = () =>
  {
       setSearchedQuery(value);
  }

  const getValue = (event)=>
  {
    setValue(event.target.value);
  }

    return (
        <div>
            <Grid column={2} textAlign="center" className='search-box'>
                <Grid.Column>
                    <h2 className='search-heading'>
                        Search Recipes with <span style={{ color: '#2185D0' }}>Our Recipe</span>
                    </h2>
                    <Form onSubmit={onFormSubmit}>
                    <Input placeholder='Tomato,Potato,Pizza'   action={{ icon: 'search', color: 'blue' }}  onChange={getValue} value={value}/>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Search