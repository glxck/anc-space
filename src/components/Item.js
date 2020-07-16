import React from 'react'

const Item = ({img, txt, width, height, reverse, txtWidth, txtPadding}) => {
    const styles = {
        margin: "150px 20%",
        display: 'flex',
        flexDirection: reverse
    }
    return (
            <div className = 'item' style={styles}>
                <div className = 'circle' style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '1px solid #902d50',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img src={img} alt = 'firstIco' style={{
                        width: width,
                        height: height
                    }}/>
                </div>
                <p style={{
                    textAlign: 'left',
                    color: '#fff',
                    fontWeight: '300',
                    fontFamily: 'Open Sans',
                    fontSize: '20px',
                    padding: txtPadding,
                    width: txtWidth
                }}>{txt}</p>
            </div>
        )
}

export default Item