import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherForm';
import TeacherForm from './pages/TeacherList';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/give-classes" component={TeacherList} />
            <Route path="/study" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;