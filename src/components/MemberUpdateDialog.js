import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MemberStore from '../stores/MemberStore'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import { useSnackbar } from 'material-ui-snackbar-provider'

const useStyles = makeStyles((theme) => ({

    select: {
        width: "100%"
    },
    label: {
        marginTop: "1.5%",
        fontSize: '0.8rem'
    }
}))



export default function MemberUpdateDialog(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const defult_id = props.id
    const defult_name = props.name
    const defult_email = props.email
    const defult_key = props.apiKey
    const id = useRef()
    const name = useRef()
    const email = useRef()
    const memberStore = React.useContext(MemberStore.context)
    const snackbar = useSnackbar();

    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        memberStore.updateUser(id.current.value, name.current.value, email.current.value).then(result => {
            console.log(result)
            if (result.status === 200) {
                window.location.reload();
            }
            setOpen(false)
            snackbar.showMessage(
                '회원정보가 정상적으로 업데이트 되었습니다.',
            )
        })
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                회원정보수정
        </Button>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">회원 정보 수정</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="id"
                        inputRef={id}
                        defaultValue={defult_id}
                        label="아이디"
                        type="text"
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        inputRef={name}
                        defaultValue={defult_name}
                        label="이름"
                        type="text"
                        multiline
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        inputRef={email}
                        defaultValue={defult_email}
                        label="이메일"
                        type="text"
                        multiline
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        defaultValue={defult_key}
                        label="api 키"
                        type="text"
                        multiline
                        fullWidth
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        수정
                </Button>
                    <Button onClick={() => { setOpen(false) }} color="primary">
                        닫기
                </Button>

                </DialogActions>
            </Dialog>
        </div>
    );
}
