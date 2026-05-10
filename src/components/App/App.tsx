import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes.ts';

export default function App() {

    const [votes, setVotes] = useState<Votes>({
        good: 0,
        netural: 0,
        bad: 0,
    });

    function handleVote(type: VoteType) {
        setVotes(prev => ({
            ...prev,
            [type]: prev[type] + 1,
        }))
    }

    function resetVotes() {
        setVotes({
            good: 0,
            netural: 0,
            bad: 0,
        })
    }

    return (
        <div className={css.app}>
            <CafeInfo />
        </div>
    );
}