// src/integrations/supabase/adminShelters.ts
import { supabase } from './client';

export async function adminListShelterAssets(
  params: {
    search?: string;
    onlyActive?: boolean;
    limit?: number;
    offset?: number;
  } = {}
) {
  const { search, onlyActive = true, limit = 20, offset = 0 } = params;

  const { data, error } = await supabase.rpc('admin_list_shelter_assets', {
    p_search: search ?? null,
    p_only_active: onlyActive,
    p_limit: limit,
    p_offset: offset,
  });

  if (error) throw error;
  return data ?? [];
}

export async function adminGetShelterDetail(shelterId: string) {
  const { data, error } = await supabase.rpc('admin_get_shelter_detail', {
    p_shelter_id: shelterId,
  });

  if (error) throw error;
  return data as {
    shelter: any;
    reviews: any[];
    open_bed_reports: any[];
  };
}
