import "./Modal.css";
import { WorkLoad } from "../../constants/WorkLoad";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";
import { axiosInstance } from "../../services/connections/axios-connection";
import { toast } from "react-toastify";

interface ModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

interface Item {
    value: string;
    label: string;
}

const workloads: Item[] = [
    { value: WorkLoad.SIXHOURS, label: "6H" },
    { value: WorkLoad.EIGHTHOURS, label: "8H" },
    { value: WorkLoad.TESTWORKLOAD, label: "T" },
];

const permissions = [
    { value: "ADMIN", label: "ADMIN" },
    { value: "USER", label: "USER" },
];

export const Modal = ({ isOpen, closeModal }: ModalProps) => {
    const navigate = useNavigate();

    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");

    const [selectedWorkload, setSelectedWorkload] = useState<string>("");
    const [selectedPermission, setSelectedPermission] = useState<string>("");
    const [selectedPassword, setSelectedPassword] = useState<string>("");

    const notify = () => toast.success("Usuário criado com sucesso!");

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const user = {
            name,
            username,
            password: selectedPassword,
            workLoad: selectedWorkload,
            role: selectedPermission,
        };

        try {
            const response = await axiosInstance.post("users", user);
            closeModal();
            notify();
        } catch (error) {
            console.error("Erro ao criar o usuário:", error);
        }
    };

    return isOpen ? (
        <div className="background">
            <div className="modal">
                <h2 className="modal-title">Novo Usuário</h2>
                <form className="modal-form" onSubmit={onSubmit}>
                    <input
                        className="input-field"
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={name}
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="input-field"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={username}
                        required
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="input-field"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={selectedPassword}
                        required
                        onChange={(e) => setSelectedPassword(e.target.value)}
                    />
                    <div className="form-group">
                        <p>Carga Horária:</p>
                        <div className="radio-group">
                            {workloads.map((item) => (
                                <label key={item.value} className="radio-label">
                                    <input
                                        type="radio"
                                        name="workload"
                                        value={item.value}
                                        checked={selectedWorkload === item.value}
                                        onChange={(e) => setSelectedWorkload(e.target.value)}
                                    />
                                    {item.label}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="form-group">
                        <p>Permissões:</p>
                        <div className="radio-group">
                            {permissions.map((item) => (
                                <label key={item.value} className="radio-label">
                                    <input
                                        type="radio"
                                        name="permission"
                                        value={item.value}
                                        checked={selectedPermission === item.value}
                                        onChange={(e) => setSelectedPermission(e.target.value)}
                                    />
                                    {item.label}
                                </label>
                            ))}
                        </div>
                    </div>
                    <Button type="submit" backgroundColor="#0DBC50">
                        Salvar
                    </Button>
                </form>
            </div>
        </div>
    ) : null;
};
