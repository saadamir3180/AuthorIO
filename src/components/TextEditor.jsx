import React, { useCallback, useEffect } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import '../styles/TextEditor.css'

const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],       
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],    
  [{ 'indent': '-1'}, { 'indent': '+1' }],        
  [{ 'direction': 'rtl' }],                        
  [{ 'size': ['small', false, 'large', 'huge'] }], 
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean']                                     
];



const TextEditor = () => {

    const wrapperRef = useCallback(wrapper => {
        if(wrapper != null){
            wrapper.innerHTML = ''
            const editor = document.createElement('div')
            wrapper.append(editor)
            new Quill( editor , { theme : 'snow', modules : { toolbar : toolbarOptions } })

        }else{
            return
        }
    })


  return (
    <div className='container' ref={wrapperRef}></div>
  )
}

export default TextEditor