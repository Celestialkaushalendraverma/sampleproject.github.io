import React from 'react'
// import './style/About.css';

function Blog () {
  const desserts = [
    {
      name: 'Chocolate Cake',
      calories: 400,
      createdAt: '2022-09-01'
    },
    {
      name: 'Ice Cream',
      calories: 200,
      createdAt: '2022-01-02'
    },
    {
      name: 'Tiramisu',
      calories: 300,
      createdAt: '2021-10-03'
    },
    {
      name: 'Cheesecake',
      calories: 600,
      createdAt: '2022-01-04'
    }
  ]

  return (
    <div className='about-container'>
      <h1 className='about-title'>Create a basic List component</h1>
      <div>
        <h2>List of low calorie desserts:-</h2>
        <DessertsList data={desserts} />
      </div>
    </div>
  )
}

function DessertsList (props) {
  const lowCaloriesDesserts = props.data.map(dessert => {
    return (
      <h3>
        {dessert.name} {dessert.calories} cal
      </h3>
    )
  })
  return <h3>{lowCaloriesDesserts}</h3>
}

export default Blog
