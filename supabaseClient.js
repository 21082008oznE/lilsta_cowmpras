// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://mjsmaukiuwksoujiqxht.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qc21hdWtpdXdrc291amlxeGh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MzU1MzQsImV4cCI6MjA2MjExMTUzNH0.hqZBJyztmRO3ms_HzyeVIwZM7ufo5-udOMOfM2Ue4aE'
)