import * as actions from './action'
import * as types from './actionTypes'
import reducer from './reducer'


describe('actions', () => {
    it('Should add todo to the todo list eg : test-1', () => {
        const payload = "test-1"
        const expectedAction = {
            type: types.ADD_TODO,
            payload
        }
        expect(actions.addTodo(payload)).toEqual(expectedAction)
    })
})


describe("Todo List",()=>{
    it("should return initialState",()=>{
        expect(reducer(undefined,{})).toEqual({
            todoData: []
        })
    })
    it("should return ['test-1', 'test-2', 'test-3', 'test-4']",()=>{
        expect(reducer({todoData: ['test-1', 'test-2', 'test-3']}, actions.addTodo('test-4'))).toEqual({
            todoData: ['test-1', 'test-2', 'test-3', 'test-4']
        })
    })
})

