    'use client';
    import { useState } from 'react';
    import Image from "next/image";
    import AuditTool from '../components/AuditTool';
    import AuditForm from '../components/AuditForm';
    import AuditResult from '../components/AuditResult';
    import Paywall from '../components/Paywall';

    export default function Home() {
      const [view, setView] = useState('paywall'); // default = show paywall

      return (
        <>
        {view === 'paywall' && <Paywall onUnlock={() => setView('audit')} />}
        {view === 'audit' && <AuditTool />}
      </>
      )

      }
    
    