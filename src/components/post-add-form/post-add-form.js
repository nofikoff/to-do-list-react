const PostAddForm = ()=> {
    return (<form className='bottom-panel d-flex'>
        <input type='text' placeholder='Ваше сообщение' className='form-control new-post-label'/>
        <button type='submit' className='btn btn-outline-secondary'>Добавить</button>
    </form>)
}
export default PostAddForm