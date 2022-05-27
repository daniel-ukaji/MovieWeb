import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/viewers-marvel.png" />
        <NavMenu>
            <a>
                <img src='/images/home-icon.svg' />
                <span>HOME</span>
            </a>
            <a>
                <img src='/images/search-icon.svg' />
                <span>SEARCH</span>
            </a>
            <a>
                <img src='/images/watchlist-icon.svg' />
                <span>WATCHLIST</span>
            </a>
            <a>
                <img src='/images/original-icon.svg' />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src='/images/movie-icon.svg' />
                <span>MOVIES</span>
            </a>
            <a>
                <img src='/images/series-icon.svg' />
                <span>SERIES</span>
            </a>

        </NavMenu>
        <UserImg src="https://images.unsplash.com/photo-1612810806695-30f7a8258391?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774" 
        />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`

const Logo = styled.img`
    width: 100px;
`

const NavMenu =  styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s; //Cubic-Bezier Transition
                transform: scaleX(0);
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1); //Transform scale from 0 to 1;
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    pointer: cursor;
`