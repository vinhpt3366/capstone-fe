import Button from '@/components/Button/Button';
import GradientIcon from '@/components/GradientIcon/Icon';
import Input from '@/components/Input';
import { Select, SelectOption } from '@/components/Select';
import React from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import { useRegisterActions, useRegisterState } from './store';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const options: SelectOption[] = [
  { value: 'GP01', label: 'GP01' },
  { value: 'GP02', label: 'GP02' },
  { value: 'GP03', label: 'GP03' },
  { value: 'GP04', label: 'GP04' },
  { value: 'GP05', label: 'GP05' },
  { value: 'GP06', label: 'GP06' },
  { value: 'GP07', label: 'GP07' },
  { value: 'GP08', label: 'GP08' },
  { value: 'GP09', label: 'GP09' },
  { value: 'GP10', label: 'GP10' },
  { value: 'GP11', label: 'GP11' }
];

const RegisterModal = ({
  isOpen,
  onClose,
  onSwitchToLogin
}: RegisterModalProps) => {
  const state = useRegisterState();
  const { setState, resetForm, register } = useRegisterActions();
  React.useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleRegister = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const result = await register();
      if (result) {
        onSwitchToLogin();
        toast.success('Đăng ký thành công, vui lòng đăng nhập');
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[420px] p-6 sm:p-10 relative animate-in fade-in duration-200">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Tạo tài khoản mới
          </h2>
          <p className="text-gray-500 mt-1">Điền thông tin để bắt đầu</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <Input
            label="Tài khoản"
            type="text"
            value={state.username}
            onChange={(e) => setState('username', e.target.value)}
            placeholder="Tài khoản"
            disabled={state.isLoading}
            required
          />
          <Input
            label="Họ và tên"
            type="text"
            value={state.fullname}
            onChange={(e) => setState('fullname', e.target.value)}
            placeholder="Nguyễn Văn A"
            disabled={state.isLoading}
            required
            autoComplete="fullname"
          />
          <Input
            label="Mật khẩu"
            value={state.password}
            onChange={(e) => setState('password', e.target.value)}
            placeholder="••••••••"
            disabled={state.isLoading}
            showPasswordToggle
            required
            error={
              state.password && state.password.length < 6
                ? 'Mật khẩu phải có ít nhất 6 ký tự'
                : undefined
            }
            autoComplete="new-password"
          />
          <Input
            label="Email"
            type="email"
            value={state.email}
            onChange={(e) => setState('email', e.target.value)}
            placeholder="name@example.com"
            disabled={state.isLoading}
            required
            autoComplete="fullname"
          />

          <Input
            label="Số điện thoại"
            type="text"
            value={state.phone}
            onChange={(e) => setState('phone', e.target.value)}
            placeholder="Số điện thoại"
            disabled={state.isLoading}
            required
            autoComplete="phone"
          />

          <Select
            label="Nhóm"
            options={options}
            value={state.group}
            onChange={(value) => setState('group', value)}
            placeholder="Choose a group"
            disabled={state.isLoading}
          />

          {state.error && (
            <div className="text-red-500 text-sm">{state.error}</div>
          )}

          <div className="space-y-3 pt-2">
            <Button
              text="Đăng ký"
              onClick={handleRegister}
              fullWidth
              isLoading={state.isLoading}
              disabled={state.isLoading}
            />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Hoặc</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Đã có tài khoản?{' '}
                <button
                  type="button"
                  onClick={onSwitchToLogin}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Đăng nhập
                </button>
              </p>
            </div>
          </div>
        </form>

        <button
          onClick={handleClose}
          className="absolute top-4 right-2 p-1"
          type="button"
          aria-label="Close"
        >
          <GradientIcon icon={IoMdClose} />
        </button>
      </div>
    </div>
  );
};

export default RegisterModal;
