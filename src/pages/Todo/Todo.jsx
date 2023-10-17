
import React from 'react'
import './Todo.scss'
import TodoItem from './TodoItem';
import { useState } from 'react';

export default function Todo({ darkMode } = props) {


	const [todoCards, setTodoCards] = useState([]);

	function createTodoCard() {
		setTodoCards(prev => [...prev, <TodoItem darkMode={darkMode} cardId={todoCards.length + 1} />])
	}
	console.log(todoCards);
	// const cards = todoCards.map((item,index) => item)
	return (

		<section className='todo'>
			<div className="todo__container container">
				<div className="todo__control">
					<button onClick={createTodoCard} className="todo__control-button">Create card</button>
					<button className="todo__control-button">Find card</button>
					<button className="todo__control-button">Hide cards</button>
				</div>

				<div className="todo__row">
					{todoCards}
				</div>

			</div>
		</section>
	)
}
