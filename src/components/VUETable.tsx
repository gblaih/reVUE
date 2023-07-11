import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VUE } from '../model/VUE';
import { fetchVueData } from '../utils/VUEDataFetcherUtils';

import vueLogo from "./../images/vue_logo.png";

export const VUETable: React.FC = () => {
    const [vueData, setVueData] = useState<VUE[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchVueData();
          setVueData(data);
        };

        fetchData();
    }, []);

    const DisplayData = vueData.map((info) => {
        return (
            <tr>
                <td>{info.hugoGeneSymbol}</td>
                <td>{info.genomicLocation}{info.revisedProteinEffects.length > 1 && <Link to={`/vue/${info.hugoGeneSymbol}`} state={info}><button style={{ float: 'right' }}>View All</button></Link>}</td>
                <td>{info.defaultEffect}</td>
                <td>{info.comment}</td>
                <td>{info.context}{info.referenceText && (<>{' '}<a href={`https://pubmed.ncbi.nlm.nih.gov/${info.pubmedIds[0]}/`} rel="noreferrer" target="_blank">({info.referenceText})</a></>)}</td>
                <td>{info.revisedProteinEffects && (<a href={`https://deploy-preview-139--genome-nexus-frontend.netlify.app/variant/${info.revisedProteinEffects[0].variant}`} rel="noreferrer" target="_blank">Genome Nexus <i className="fa fa-external-link" /></a>)}</td>
            </tr>
        );
    });

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Gene</th>
                        <th>Genomic Location</th>
                        <th>Predicted Effect</th>
                        <th>
                            <img alt='reVUE logo' src={vueLogo} width={20} style={{marginBottom:2}} />{' '}
                            Actual Effect
                        </th>
                        <th>Context & Reference</th>
                        <th>Usage Example</th>
                    </tr>
                </thead>
                <tbody>{DisplayData}</tbody>
            </table>
        </div>
    );
}

export default VUETable;