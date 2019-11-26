import React, { Component } from 'react';
import styled from 'styled-components';
import TitleBox from "./reusableComponents/TitleBox"
import TableView from "./reusableComponents/TableView"

const TableWrapper = styled.div`
padding-left: 500px;
margin-top: 1px;
`;

class Table extends Component {
    render() {
        return (
           <TableWrapper> 
                <TitleBox heading="SELECT TABLE"></TitleBox>
                {/* <TableBox></TableBox> */}
                <TableView></TableView>
            </TableWrapper>
        );
    }
}
 
export default Table;