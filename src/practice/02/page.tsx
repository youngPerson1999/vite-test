import { useEffect, useRef, useState, type ReactNode } from "react"
import './02.css'

const Modal = ({isOpen, title, onClose, children}:{isOpen:boolean, title:string, onClose:()=>void, children:ReactNode}) =>{
    const modalRef = useRef<HTMLDivElement|null>(null);

    useEffect(()=>{
        if(!isOpen) return;

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden'

        const handleKeyDown = (e: KeyboardEvent) =>{
            if(e.key === 'Escape') {
                onClose();
            }

        }
        document.addEventListener('keydown', handleKeyDown);
        modalRef.current?.focus();

        return () => {
            document.body.style.overflow = prevOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [isOpen, onClose])


    if(!isOpen) return null;
    return (
        <div className="overlay">
            <div
            className="modal"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            ref={modalRef}
            onClick={(e)=>e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}


const ComponentPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (
    <div>
        <h1>This is ComponentPage</h1>
        <button onClick={()=>setIsModalOpen(!isModalOpen)}>모달 열기</button>
    </div>)
}

export default ComponentPage