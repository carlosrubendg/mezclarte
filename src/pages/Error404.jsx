import React from 'react'

const Error404 = () => {
  return (
    <>
      <div style={{
        height: 'calc(100vh - 441px)',
        backgroundColor: '#ffffff',
        padding: '100px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: '300',
        }}>PÁGINA NO ENCONTRADA</h1>
      </div>
    </>
  )
}

export { Error404 }