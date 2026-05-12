import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import { useState } from 'react';
import type { Votes, VoteType } from '../../types/votes.ts';
import VoteOptions from '../VoteOptions/VoteOptions';

export default function App() {

    const [votes, setVotes] = useState<Votes>({
        good: 0,
        neutral: 0,
        bad: 0,
    });

    function handleVote(update: VoteType) {
        return setVotes(prev => ({
            ...prev,
            [update]: prev[update] + 1,
        }))
    }

    function resetVotes() {
        setVotes({
            good: 0,
            neutral: 0,
            bad: 0,
        })
    }

     const totalVotes = votes.good + votes.bad + votes.neutral;

    return (
        <div className={css.app}>
            <CafeInfo />
            <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0} />
        </div>
    );
}