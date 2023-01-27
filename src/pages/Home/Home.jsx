import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import moment from "moment"
import axios from "axios"
import ReactPaginate from "react-paginate"
import { Sidebar } from "../../components"
import Scan from "../../components/scanPage/Scan"
import { ADD_USERS, ADD_SCANS } from "../../redux/action"
import usersJSON from '../../users.json'
import scansJSON from '../../scans.json'

const Home = () => {
    const { users, scans } = useSelector(store => store)
    console.log('users', users)
    console.log('scans', scans)
    const [status, setStatus] = useState("all")
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)

    const [pageNumber, setPageNumber] = useState(0)
    const [scansPerPage, setScansPerPage] = useState(3)
    const pagesVisited = pageNumber * scansPerPage
    
    // const displayScans = scans

    // const indexOfLastPost = currentPage * scansPerPage
    // const indexOfFirstPost = indexOfLastPost - scansPerPage
    // const currentScans = scans.slice(indexOfFirstPost, indexOfLastPost)

    const filterByStatus = () => {
        if (status === "all") {
            return scans
        } else {
            return scans.filter(element => element.status === status)
        }
    }

    const filteredScans = filterByStatus()

    const pageCount = Math.ceil(scans.length / scansPerPage)

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected)
    };

    useEffect(() => {
        const getUsers = async () => {
            dispatch({ type: ADD_USERS, usersData: usersJSON })
            // try {
            //     const usersData = await axios.get("../../users.json")
            //     // const ax = axios.create({
            //     //     baseURL: 'http://localhost:3000/users'
            //     // })
            //     // const usersData = await ax.get('users.json')
            //     dispatch({ type: ADD_USERS, usersData })
            // } catch (e) {
            //     throw e;
            // }
        }
        const getScans = async () => {
            dispatch({ type: ADD_SCANS, scansData: scansJSON })
            // try {
            //     const scansData = await axios.get("/src/scans.json")
            //     // const ax = axios.create({
            //         //     baseURL: 'http://localhost:3000/scans'
            //         // })
            //         // const scansData = await ax.get('scans.json')
                    
            //         dispatch({ type: ADD_SCANS, scansData })
            // } catch (e) {
            //     throw e;
            // }
        }
        getUsers()
        getScans()
    }, [])

    return (
        <StyledHome>
            <Sidebar status={status} setStatus={setStatus} />
            <StyledContainer>
                {filteredScans
                    .slice(pagesVisited, pagesVisited + scansPerPage)
                    .map(element => {
                    let user = users.find(userElement => userElement.id = element.userId)
                    return (
                        <Scan
                            key={element.id}
                            scanId={element.id}
                            userName={user.name}
                            userEmail={user.email}
                            status={element.status}
                            createdAt={moment(element.createdAt).format("ddd MM, yyyy")}
                        />
                    )
                })}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    previousLabel="< previous"
                    pageCount={pageCount}
                    onPageChange={handlePageChange}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginaionDisabled"}
                    styles={{ cursor: 'pointer' }}                   
                />
            </StyledContainer>
        </StyledHome>
    )
}

export default Home

const StyledHome = styled.div`
    display: flex;
`

const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center   
`