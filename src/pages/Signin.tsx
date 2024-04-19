import React, { useState, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { loginService } from '@/services/auth';
import { toast } from 'react-hot-toast';

interface FormData {
  username: string;
  password: string;
}

const Signin: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      toast.error('Please enter both username and password');
      return;
    }
    const myPromise = loginService(formData.username, formData.password);

    toast.promise(
      myPromise,
      {
        loading: 'Loading',
        success: (data) => `Successfully logged in as ${data.username}`,
        error: (err) => `Login failed: ${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      }
    );
  };

  return (
    <div className="flex sign-page justify-center items-center h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full max-w-md ">
        <div className="hidden sm:flex absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#fff4_1px,transparent_1px),linear-gradient(to_bottom,#fff4_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <Card className='py-5 px-5 h-full sm:h-max bg-transparent sm:backdrop-blur-lg border-none sm:shadow-xl'>
            <CardHeader>
              <CardTitle className="text-[#2e2e2e]">Mumtoz Cards</CardTitle>
              <CardDescription className='text-white'>Foydalanuvchi ma'lumotlaringizni kiriting</CardDescription>
            </CardHeader>
            <CardContent>
              <form autoComplete="off" onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
                    Username
                  </label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full bg-input"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-input border-input"
                  />
                </div>
                <Button type="submit" className="w-full">Kirish </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Suspense>
    </div>
  );
}

export default Signin;
