import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'

export default function AuthModal(){
    return(
        <Dialog>

            <DialogTrigger asChild>
                <Button variant="default" className='text-xl text-white bg-gray-600 hover:bg-gray-800 hover:text-gray-100'>Sign In</Button>
            </DialogTrigger>

            <DialogContent className='bg-gray-900'>
                <DialogHeader>
                    <DialogTitle>Login</DialogTitle>
                </DialogHeader>

                <p className='text-sm text-muted-foreground mb-4'>
                    Please enter your account
                </p>

                <form className='flex flex-col'>

                    <input  
                        type = 'email'
                        placeholder="Email"
                        className="border rounded p-2">
                    </input>

                    <input  
                        type = 'password'
                        placeholder="Password"
                        className="border rounded p-2 ">
                    </input>
                    <Button 
                        type='submit'
                        className='mt-2 '>
                            Login
                    </Button>

                </form>

            </DialogContent>
        </Dialog>
    )
}