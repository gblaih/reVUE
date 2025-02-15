export type VUE = {
    hugoGeneSymbol: string;
    transcriptId: string;
    genomicLocationDescription: string;
    defaultEffect: string;
    comment: string;
    context: string;
    revisedProteinEffects: {
        variant: string;
        genomicLocation: string;
        transcriptId: string;
        vepPredictedProteinEffect: string;
        vepPredictedVariantClassification: string;
        revisedProteinEffect: string;
        revisedVariantClassification: string;
        pubmedId: number;
        referenceText: string;
        confirmed: boolean;
    }[];
};
