export interface ArqStepsResponse {
  etapa_id: number;
  arquivo_id: string;
  usuario_id: number;
  arquivo_descricao: string;
  arquivo_data: string;
  arquivo_versao: string;
  arquivo_link: string;
  arquivo_extensao: string;
  arquivo_status: number;
  projeto_id: number;
  arquivo_id_pai: string | null;
  arquivo_tamanho: number | null;
}
